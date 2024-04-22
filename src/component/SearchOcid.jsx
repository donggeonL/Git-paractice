import API_KEY from '../apikey/API_KEY'
import React, { useState } from 'react';
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid rgb(92, 184, 92);
  color: rgb(92, 184, 92);
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;
`; // 스타일이 적용된 html 버튼

const _Input = styled.input`
    border: 1px solid rgb(92, 184, 92);
    text-align: center;
    border-radius: 5px;
    padding: 3px 11px;
    align-items: center;
    margin-right: 10px;
    margin-left: 3%;
    margin-bottom: 20px;
    float: none;
    background-size: 0 2px, 100% 1px;
    transition: 0s ease-out 0s;
    color: #bfbfbf;
    min-height: 35px;
    display: initial;
    width: 30%;
    outline: none;
    font-size: 15px;
`;

const StyledImage = styled.img`
  width: 20%;
  height: 20%;
  object-fit: cover;
  margin-left: 5%;
  border-radius: 20%;
  border-color: rgb(92, 184, 92);
  border-style: double;
`;

const Job = styled.div`
    display: flex;
    align-items: center;
  `;
  
  const Job__description = styled.div`
    margin: 0 16px;
    text-align: left;
  `;

// 이부분은 같이 고민하면서 해야할 곳
// 일단 동적으로 ocid 불러오는건
const SearchOcid = () => {
    const [id, setId] = useState(null);
    var ocid = "";
    const [data2, setData2] = useState({});
    const urlGetOcid = "https://open.api.nexon.com/maplestory/v1/id?character_name="+encodeURI(id);

    const handleClick = async () => {
        try {
            const data = await (await fetch(urlGetOcid, 
                {
                    headers:
                    {
                        "x-nxopen-api-key": API_KEY
                    }
                })).json()
            window.sessionStorage.setItem("ocid", data.ocid);
            ocid = window.sessionStorage.getItem("ocid");
            
            const urlGetOcid1 = "https://open.api.nexon.com/maplestory/v1/character/basic?ocid="+ ocid +"&date=2024-03-12";
            const data2 = await (await fetch(urlGetOcid1, 
                {
                    headers:
                    {
                        "x-nxopen-api-key": API_KEY
                    }
                })).json()
            setData2(data2);
        } catch (err) {
            console.log(err.message)
        }finally{
            
        }
    }

    function handleKeyDown(e){
        if (e.key === 'Enter') {
            handleClick();
          }
    }

    return (
        <div>
            <_Input id = "sOcid" placeholder='캐릭터 닉네임' onChange={e => setId(e.target.value)} onKeyDown={e => handleKeyDown(e)}/>
            <StyledButton type="submit" onClick={handleClick} >Search</StyledButton>
                <Job>
                {  data2.character_image ? <StyledImage src={data2.character_image}/>: <div/> }
                    <Job__description>
                        <p> 이름 : {data2.character_name}</p>
                        <p> 직업 : {data2.character_class}</p>
                        <p> 길드 : {data2.character_guild_name}</p>
                        <p> Lv : {data2.character_level}</p>
                    </Job__description>
                </Job>
        </div>
    );
};

export default SearchOcid;