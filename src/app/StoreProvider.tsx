"use client"

import { Provider } from 'react-redux'
import { initStore, Store } from '@/store';
import { setLoginData } from '@/store/appSlice';
import { updatePageInfoFromReq } from '@/store/pageInfoSlice';

export default function StoreProvider({
    children,
    loginData,
    pageInfo,
}: {
    children: React.ReactNode
    loginData: any,
    pageInfo: PageInfo,
}) {
    const store : Store = initStore();
    store.dispatch(setLoginData(loginData));
    store.dispatch(updatePageInfoFromReq(pageInfo));
    return <Provider store={store}>{children}</Provider>
}
