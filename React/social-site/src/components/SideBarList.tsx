const SideBarList = ({ listItems, highlightedItem, handleOnClickListItem}: { listItems: Array<string>,  highlightedItem:string, handleOnClickListItem:(item: string)=>void}) => {

    return (
        <ul className="nav nav-pills flex-column mb-auto">
            {listItems.map((item) => (
            <li className="nav-item" key={item} onClick={()=>handleOnClickListItem(item)}>
                <a href="#" className={`nav-link ${highlightedItem === item && "active"}`} aria-current="page">
                    <svg className="bi pe-none me-2" width="16" height="16"></svg>
                    {item}
                </a>
            </li>
            ))}
        </ul>
    );

}

export default SideBarList;