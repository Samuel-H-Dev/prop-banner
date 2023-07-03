


export default function BannerFour({howMany, shirt, data: {title, content, bgColor, fontColor}}){




        return(
            <div className="banner-container"
            style={{"backgroundColor": bgColor, "color": fontColor}}>

            <h2>{title}</h2>
            <p>shirt: {shirt}</p>
            <p>how Many: {howMany}</p>
            <p>{content}</p>
            </div>
        )




}