import SidebarList from "./SideBarList";

const SideBar = ({listItems, selectedListItem, onListItemClick}:{listItems:string[],selectedListItem:string,onListItemClick:(name:string)=>void}) => {

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{ width: '280px' }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
                <span className="fs-4">Sidebar</span>
            </a>
            <hr />
            <SidebarList listItems={listItems} highlightedItem = {selectedListItem} handleOnClickListItem = {onListItemClick}/>
            <hr />
        </div>

    );
};

export default SideBar;