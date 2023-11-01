import { rootActions } from '@/app/providers/StoreProvider/config/store';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';


export function useActions() {
  const dispatch = useDispatch();

  const action = useMemo(() => {
    return bindActionCreators(rootActions, dispatch);
  }, [dispatch]);

  return action;
}
