import React, { useState, useEffect, useRef } from 'react';
import { Stage, Layer, Image as KonvaImage, Transformer, Rect } from 'react-konva';
import useImage from 'use-image';
import './garmentPreview.css';

export default function TshirtDesigner({ designUrlFront, designUrlBack, apparelPath }) {
  const [side, setSide] = useState(true);
  const [designImage] = useImage(side ? designUrlBack : designUrlFront);
  const [shirtImage] = useImage(apparelPath);
  const [designProps, setDesignProps] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [selectedShape, setSelectedShape] = useState(null);
  const imageRef = useRef();
  const transformerRef = useRef();

  const STAGE_WIDTH = 550;
  const STAGE_HEIGHT = 550;
  const BOX_WIDTH = 200;
  const BOX_HEIGHT = 350;

  const [boundingBox, setBoundingBox] = useState({ x: 0, y: 0, width: BOX_WIDTH, height: BOX_HEIGHT });

  useEffect(() => {
    setBoundingBox({
      x: (STAGE_WIDTH - BOX_WIDTH) / 2,
      y: (STAGE_HEIGHT - BOX_HEIGHT) / 2,
      width: BOX_WIDTH,
      height: BOX_HEIGHT,
    });
  }, []);

  useEffect(() => {
    if (!designImage) return;

    const aspect = designImage.width / designImage.height;
    const maxWidth = boundingBox.width;
    const maxHeight = boundingBox.height;

    let width = maxWidth;
    let height = width / aspect;

    if (height > maxHeight) {
      height = maxHeight;
      width = height * aspect;
    }

    setDesignProps({
      x: boundingBox.x,
      y: boundingBox.y,
      width,
      height,
    });
  }, [designImage, side, boundingBox]);

  useEffect(() => {
    if (transformerRef.current && selectedShape) {
      transformerRef.current.nodes([selectedShape]);
      transformerRef.current.getLayer().batchDraw();
    }
  }, [selectedShape]);

  return (
    <div className="designer-wrapper">
      <Stage width={STAGE_WIDTH} height={STAGE_HEIGHT} className="canvas">
        <Layer>
          {shirtImage && (
            <KonvaImage image={shirtImage} width={STAGE_WIDTH} height={STAGE_HEIGHT} />
          )}

          <Rect
            x={boundingBox.x}
            y={boundingBox.y}
            width={boundingBox.width}
            height={boundingBox.height}
            stroke="#888"
            dash={[6, 4]}
          />

          {designImage && (
            <KonvaImage
              image={designImage}
              ref={imageRef}
              x={designProps.x}
              y={designProps.y}
              width={designProps.width}
              height={designProps.height}
              draggable
              onClick={() => setSelectedShape(imageRef.current)}
              dragBoundFunc={(pos) => {
                const newX = Math.max(
                  boundingBox.x,
                  Math.min(pos.x, boundingBox.x + boundingBox.width - designProps.width)
                );
                const newY = Math.max(
                  boundingBox.y,
                  Math.min(pos.y, boundingBox.y + boundingBox.height - designProps.height)
                );
                return { x: newX, y: newY };
              }}
              onDragEnd={(e) =>
                setDesignProps((prev) => ({
                  ...prev,
                  x: e.target.x(),
                  y: e.target.y(),
                }))
              }

             onTransformEnd={(e) => {
                const node = e.target;
                const scaleX = node.scaleX();
                const scaleY = node.scaleY();

                node.scaleX(1);
                node.scaleY(1);

                let newWidth = Math.max(50, node.width() * scaleX);
                let newHeight = Math.max(50, node.height() * scaleY);

                const aspectRatio = newWidth / newHeight;

                if (newWidth > boundingBox.width) {
                  newWidth = boundingBox.width;
                  newHeight = newWidth / aspectRatio;
                }

                if (newHeight > boundingBox.height) {
                  newHeight = boundingBox.height;
                  newWidth = newHeight * aspectRatio;
                }

                const newX = Math.max(
                  boundingBox.x,
                  Math.min(node.x(), boundingBox.x + boundingBox.width - newWidth)
                );
                const newY = Math.max(
                  boundingBox.y,
                  Math.min(node.y(), boundingBox.y + boundingBox.height - newHeight)
                );

                setDesignProps({
                  x: newX,
                  y: newY,
                  width: newWidth,
                  height: newHeight,
                });
              }}

            />
          )}

          <Transformer
            ref={transformerRef}
            rotateEnabled={false}
            enabledAnchors={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
            boundBoxFunc={(oldBox, newBox) => {
              if (newBox.width < 50 || newBox.height < 50) return oldBox;
              return newBox;
            }}
          />
        </Layer>
      </Stage>
      <button className="toggle-btn" onClick={() => setSide(!side)}>
        {side ? 'front' : 'back'}
      </button>
    </div>
  );
}
