export function Skills(){
  return(
    <div className="w-full h-[200px] border-2 overflow-scroll">
      <div className="wrapper min-h-[100%]">
      <div className="image-Slider w-[25%] h-full">
        <div className="img">
          <img src="javascript-logo-E967E87D74-seeklogo.com.png"/>
        </div>
        <div className="img">
          <img src="react.png"/>
        </div>
        <div className="img">
          <img src="Python-Software-Foundation-Emblem.png"/>
        </div> <div className="img">
          <img src="django.png"/>
        </div>
        <div className="img-selector">
        </div>
      </div>
      <div className="imgPreview w-[75%] h-[max-content]"> </div>
      </div>
    </div>
  )
}