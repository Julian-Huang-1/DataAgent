import * as React from 'react';
import Box from '@mui/material/Box';
import {
  DataGridPremium,
  GridToolbar,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from '@qvztest/xdgpre';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function DataGridPremiumDemo() {
  const { data, loading } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    editable: true,
    visibleFields: [
      'commodity',
      'quantity',
      'filledQuantity',
      'status',
      'isFilled',
      'unitPrice',
      'unitPriceCurrency',
      'subTotal',
      'feeRate',
      'feeAmount',
      'incoTerm',
    ],
  });
  const apiRef = useGridApiRef();

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      ...data.initialState,
      rowGrouping: {
        ...data.initialState?.rowGrouping,
        model: ['commodity'],
      },
      sorting: {
        sortModel: [{ field: '__row_group_by_columns_group__', sort: 'asc' }],
      },
      aggregation: {
        model: {
          quantity: 'sum',
        },
      },
    },
  });

  return (
    <Box sx={{ height: 520, width: '100%' }}>
      <DataGridPremium
        {...data}
        apiRef={apiRef}
        loading={loading}
        disableRowSelectionOnClick
        initialState={initialState}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}


import { useState, useEffect } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error, errorInfo) => {
      // 可以在这里记录错误信息到日志服务
      console.error('Error caught by ErrorBoundary:', error, errorInfo);
      setHasError(true);
    };

    // 组件挂载时设置错误处理函数
    window.addEventListener('error', errorHandler);

    // 组件卸载时移除错误处理函数
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  if (hasError) {
    // 当错误发生时显示备用 UI
    return <div>Oops! Something went wrong.</div>;
  }

  // 正常情况下渲染子组件
  return children;
}


