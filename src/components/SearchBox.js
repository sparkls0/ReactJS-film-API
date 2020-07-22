import React from 'react';

const SearchArea = (props) => {
    return (
        <div className = "container full-scale">
            <div className= "row full-scale">
                <section className="col s4 offset-s4 center">
                    <form className="full-scale searchbar" action="" onSubmit={props.handleSubmit}>
                        <div className= "input-field container-searchbar full-scale">
                            <input id="searchBar" placeholder="Chercher un film..." type = "text" onChange={props.handleChange}/>
                            <a id="btnSearch" class="btn-search"><i class="fa fa-search"></i></a>
                        </div>  
                    </form>
                </section>
            </div>
        </div>
        )
    }

export default SearchArea;