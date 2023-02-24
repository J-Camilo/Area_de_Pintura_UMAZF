// import "./Options.css"

export const Image = (props) => {
    return (
        <>
            <img className={props.sty} src={props.search} alt={props.name} />
        </>
    );
};