import React from "react";
import { ExpoCardDouble, ExpoCardSingle } from "../../features/exploresection/expocard";



const Expo2 = () => {
  return (
    <div className="discover-items">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-heading">
              <div className="line-dec"></div>
              <h2 className="text-white">Discover Some Of Our Items.</h2>
            </div>
          </div>
          <div className="col-lg-7">
            <form
              id="search-form"
              name="gs"
              method="submit"
              role="search"
              action="#"
            >
              <div className="row">
                <div className="col-lg-4">
                  <fieldset>
                    <input
                      type="text"
                      name="keyword"
                      className="searchText"
                      placeholder="Type Something"
                      autoComplete="on"
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-3">
                  <fieldset>
                    <select
                      id="chooseCatagory"
                      type="text"
                      name="Category"
                      className="form-select"
                      aria-label="Default-select example"
                      placeholder="Type Something"
                    >
                      <option selected>All categories</option>
                      <option type="checkbox" name="option1" value="Music">
                        {" "}
                        Music
                      </option>
                      <option value="Digital">Digital</option>
                      <option value="Blockchain">Blockchain</option>
                      <option value="Digital">Virtual</option>
                    </select>
                  </fieldset>
                </div>
                <div className="col-lg-3">
                  <fieldset>
                    <select
                      id="chooseCatagory"
                      type="text"
                      name="Category"
                      className="form-select"
                      aria-label="Default-select example"
                      placeholder="Type Something"
                    >
                      <option selected>Avalible</option>
                      <option type="checkbox" name="option1" value="Music">
                        Ending Soon
                      </option>
                      <option value="Digital">Coming Soon</option>
                      <option value="Blockchain">Closed</option>
                    </select>
                  </fieldset>
                </div>
                <div className="col-lg-2">
                  <fieldset>
                    <button className="main-button">Search </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
     
        </div>
        <ExpoCardDouble />
        <ExpoCardSingle />
        
      </div>
     
    </div>
  );
};

export default Expo2;
