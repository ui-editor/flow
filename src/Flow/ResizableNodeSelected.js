import { Handle, Position, NodeResizer } from 'reactflow';
import React, { memo } from 'react';

const ResizableNodeSelected = ({ data, selected }) => {
  return (
    <div>
      <NodeResizer color="#ff0071" isVisible={selected} minWidth={100} minHeight={30} />
      <Handle type="source" position={Position.Left} />
      <div style={{ padding: 10 }}>{data.label}</div>
      <Handle type="target" position={Position.Right} />
    </div>
  );
};

export default ResizableNodeSelected;
