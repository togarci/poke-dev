import { MagnifyingGlass } from "phosphor-react";

export default function Search(props) {
    return (
        <div className="search-input d-flex flex-column col-12">
            <div className="content-input-search d-flex justify-content-between">
                <input placeholder={props.placeholder} type="text" className="d-flex col-11"/>
                <MagnifyingGlass size={28} />
            </div>            
        </div>
    )
}