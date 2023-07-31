import React, {memo,} from 'react';
import {GetStaticPaths, GetStaticPropsContext} from "next";
import { JobApiResponse } from "@/pages/api/jobs-api";
import {usePageNationCtx, pageNationCtx} from "@/utils/pageNationContext";
import PageNationForm from "@/components/MainContainer/Forms/PageNationForm";
import { Filter } from '@/utils/customConvinienseType'
import Script from 'next/script'

export const getStaticPaths: GetStaticPaths = async () => {
    const urlPath = "jobs"

    const data = [1,2,3,4,5];
    const paths = data.map((path) => `/${urlPath}/${path}`)
    return {
        paths: paths,
        fallback: "blocking",
    }
}

type Props = {
    props: JobApiResponse
    revalidate: number
}

export const getStaticProps: (context: GetStaticPropsContext) => Promise<Props> = async (context: GetStaticPropsContext): Promise<Props> => {
    if (typeof context.params === 'undefined') {
        throw new Error("パラメーターが存在しません")
    }
    // const id = context.params.id
    // const url = Endpoint.referenceNumber + `?reference_number=${id}`
    // const jobs: JobInformations = await fetch(url).then((r) => r.json());

    const dummyData: JobApiResponse = {
        jobType: "エンジニア"
    }
    return {
        props: dummyData,
        revalidate: 10, // ここを追加 現在10秒
    };
}

const Job = (props: JobApiResponse) => {
    const pageCtx = usePageNationCtx();
    return (
        <pageNationCtx.Provider value={pageCtx}>
            <PageNationForm />
        </pageNationCtx.Provider>
    );
};

export default memo(Job);
