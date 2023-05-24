const Label = ({ text, kleur, fontSize }) => {
    
    return(
        <div className={ `Label ${kleur}` }>
            { text }
        </div>
    )

}

export default Label