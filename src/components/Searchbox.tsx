import React from "react";
import "../app/main.css";
import { useRecoilState, useSetRecoilState } from "recoil";
import { siteState } from "@/store/state";
import { useState } from 'react';

export const Searchbox = () => {
    const [isAmazonActive, setIsAmazonActive] = useState(true);
    const [isFlipkartActive, setIsFlipkartActive] = useState(false);

    const handleButtonClick = (platform: string) => {
        if (platform === 'amazon') {
            setIsAmazonActive(true);
            setIsFlipkartActive(false);
        } else if (platform === 'flipkart') {
            setIsFlipkartActive(true);
            setIsAmazonActive(false);
        }
    };


    return (
        <div className="flex justify-center items-center flex-col my-5 mx-20">

            <div className="switcholder">
                <span className={`slider ${isAmazonActive ? 'amazon-active' : ''} ${isFlipkartActive ? 'flipkart-active' : ''}`}></span>
                <button style={{ zIndex: '100', opacity: isAmazonActive ? '1' : '0.5', transition: '0.2s' }} onClick={() => handleButtonClick('amazon')}>
                    Amazon
                </button>
                <button style={{ zIndex: '100', opacity: isFlipkartActive ? '1' : '0.5',  transition: '0.2s' }} onClick={() => handleButtonClick('flipkart')}>
                    Flipkart
                </button>
            </div>
            {/* <div className="flex justify-center items-center flex-col">
                {site==='amazon' ? <button className="common Amazon" onClick={() => setSite('amazon')}>Amazon</button> : <button className="Amazon" onClick={() => setSite('amazon')}>Amazon</button>}
                {site==='flipkart' ? <button className="common Flipkart" onClick={() => setSite('flipkart')}>Flipkart</button> :<button className="Flipkart" onClick={() => setSite('flipkart')}>Flipkart</button>}
            </div> */}
            <div className="w-4/5 flex justify-center items-center">
                <input placeholder="Enter Link" className="w-4/5 inputText" />
            </div>
            {/* <div className="w-64">
            </div> */}
        </div>
    );
};
