import React from 'react';
import styled from "styled-components";
import ghLogo from "../common/img/70E7.gif";

const Image = styled.img`
    width: 100px;
    height: 100px;
`;

const Main = () => {
    return (
        <div>
            <Image src={ghLogo}></Image>
        </div>
    );
};

export default Main;