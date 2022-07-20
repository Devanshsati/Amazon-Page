import React from 'react';
import { Link } from 'react-router-dom';
import "./admin.css";

export function Admin(){

    // const fs = require('fs');
    // let raw = fs.readFileSync("../src/Mycomponent/items.json");
    // let itemList = JSON.parse(raw);
    // let newItem = {
    //     name: this.productname,
    //     count: 1,
    // }
    // itemList.averages.push(newItem);
    // let newRaw = JSON.stringify(itemList);
    // fs.writeFileSync("../src/Mycomponent/items.json", newRaw);



    window.onload=function(){
        document.querySelector("#files").addEventListener("change", (e) => { //CHANGE EVENT FOR UPLOADING PHOTOS
            if (window.File && window.FileReader && window.FileList && window.Blob) { //CHECK IF FILE API IS SUPPORTED
              const files = e.target.files; //FILE LIST OBJECT CONTAINING UPLOADED FILES
              const output = document.querySelector("#result");
              output.innerHTML = "";
              for (let i = 0; i < files.length; i++) { // LOOP THROUGH THE FILE LIST OBJECT
                  if (!files[i].type.match("image")) continue; // ONLY PHOTOS (SKIP CURRENT ITERATION IF NOT A PHOTO)
                  const picReader = new FileReader(); // RETRIEVE DATA URI
                  picReader.addEventListener("load", function (event) { // LOAD EVENT FOR DISPLAYING PHOTOS
                    const picFile = event.target;
                    const div = document.createElement("div");
                    div.innerHTML = `<img class="thumbnail" src="${picFile.result}" title="${picFile.name}"/>`;
                    output.appendChild(div);
                  });
                  picReader.readAsDataURL(files[i]); //READ THE IMAGE
              }
            } else {
              alert("Your browser does not support File API");
            }
          });
    }

    return(
        <>
            <h2 className="heding">Add A New Product</h2>
            <form action='/new' method='GET'>
                <div className="uploadimg form-group">
                    <input id="files" type="file" multiple="multiple" accept="image/jpeg, image/png, image/jpg"/>
                    <output id="result"></output>
                </div>
                <hr className="outline" />
                <div className="vitalinfo">
                    <h4>Vital Info</h4>
                    <hr className="inline" />
                    <div className="mainsec">
                        <div className="row"><h6 className="col-2">Product ID</h6><input className="form-control col-8" type="number" name="productid" id="productid" placeholder='Enter Number'/></div>
                        <div className="row"><h6 className="col-2">Product Name</h6><input className="form-control col-8" type="text" name="productname" id="productname" placeholder='Enter Text'/></div>
                        <div className="row"><h6 className="col-2">Brand Name</h6><input className="form-control col-8" type="text" name="brandname" id="brandname" placeholder='Enter Text'/></div>
                        <div className="row"><h6 className="col-2">Total Stock</h6><input className="form-control col-8" type="number" name="totalstock" id="totalstock" placeholder='Enter Number'/></div>
                    </div>
                </div>
                <hr className="outline" />
                <div className="variationinfo">
                    <h4>Variation Info</h4>
                    <hr className="inline" />
                    <div className="mainsec">
                        <div className="row">
                            <h6 className="col-8">Does This Have Variations?</h6>
                            <div className="col-1 custom-control custom-radio custom-control-inline">
                                <input type="radio" id="customRadioInline1" name="customRadioInline" className="custom-control-input" data-toggle="collapse" data-target="#collapseExample" aria-controls="collapseExample"/>
                                <label className="custom-control-label" htmlFor="customRadioInline1">Yes</label>
                            </div>
                            <div className=" col-1 custom-control custom-radio custom-control-inline">
                                <input type="radio" id="customRadioInline2" name="customRadioInline" className="custom-control-input" data-toggle="collapse" data-target="#collapseExample" aria-controls="collapseExample"/>
                                <label className="custom-control-label" htmlFor="customRadioInline2">No</label>
                            </div>
                        </div>
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body variation">
                                <div className="dropdown row">
                                    <h6 className="col-8">Variation Type</h6>
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                                        Choose
                                    </button>
                                    <div className=" dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link className="dropdown-item" to="#">Size</Link>
                                        <Link className="dropdown-item" to="#">Type</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="outline" />
                <div className="offerinfo">
                    <h4>Offer Info</h4>
                    <hr className="inline" />
                    <div className="mainsec">
                        <div className="row"><h6 className="col-2">Price of product</h6><input className="form-control col-8" type="number" name="productprice" id="productprice" placeholder='Enter Number'/></div>
                        <div className="collapse1" id="collapseExample1">
                            <div className="row"><h6 className="col-2">Discount %</h6><input className="form-control col-8" type="number" name="productdisc" id="productdisc" placeholder='Enter Number'/></div>
                        </div>
                    </div>
                </div>
                <hr className="outline" />
                <div className="otherinfo">
                    <h4>Other Info</h4>
                    <hr className="inline" />
                    <div className="mainsec">
                        <div className="row"><h6 className="col-2">Product Description</h6><textarea className="form-control col-8" name="proddesc" id="proddesc" rows="3"></textarea></div>
                    </div>
                </div>
                <center><button type="submit" className="bsub">Upload Product</button></center>
            </form>

        </>
    )

}
