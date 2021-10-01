const ContentItem = (props) => {
    const {children} = props.item;

    const directoryLogo = '>'
    const onSelectItemHandler = (event) => {
        props.onSelectItem(props.item)
    }
    return(
        <li onClick={onSelectItemHandler} value={props.item}>
            {props.item['name']} 
            {children && directoryLogo}
        </li>
    )
}

export default ContentItem;

