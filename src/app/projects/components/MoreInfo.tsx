import Image from "next/image"
import 'material-icons/iconfont/filled.css';
import React from "react";

interface modalProps{
  visible : boolean,
  close() : void,
  info? : string[][] | undefined,
}
const CONTENT_TYPE = {
  title : (content : string) => <h1>{content}</h1>,
  subtitle : (content : string) => <h3>{content}</h3>,
  text : (content : string) => <p>{content}</p>,
  image : (content : string) => (
    <div className="modal-image-container">
      <Image 
      alt='image'
      src = {content}
      fill = {true}
      objectFit='contain'
      />
    </div>
  ),
  caption : (content : string) => <p className="modal-image-caption">{content}</p>,
}
type ObjectKey = keyof typeof CONTENT_TYPE;

function fillModal ( data : string[][]) {
  return data.map(element => CONTENT_TYPE[element[0] as ObjectKey](element[1]))
} 

function MoreInfo(props:modalProps) : React.ReactNode {
  return (
    <div className={` modal-wrapper ${props.visible?'modal-open':'modal-closed'} `} onClick={props.close}>
      <div className="more-window" onClick={e => e.stopPropagation()}>
        {props.info && fillModal(props.info)}
      <div className="floating-button" onClick={props.close}>
        <span className="material-icons">close</span>
      </div>
      </div>
    </div>
  )
}

export default MoreInfo
