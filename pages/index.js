import React from "react";
import homeStyle from "../styles/Home.module.css";
import Image from "next/image";
import { FiFilter, FiShoppingCart } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const [nav2, setNav2] = React.useState();
  const [nav, setNav] = React.useState();
  const category = [
    "tshirt.png",
    "shorts.png",
    "jacket.png",
    "shoes.png",
    "pants.png",
    "jacket.png",
  ];

  const promotion = [
    "Promotion.png",
    "Promotion2.png",
    "Promotion.png",
    "Promotion2.png",
  ];

  return (
    <>
      <div className={`${homeStyle.main}`}>
        <div className={`container-fluid ${homeStyle.navbar}`}>
          <div className="row" style={{ padding: "10px 80px 15px 80px" }}>
            <div className="col-1 ">
              <Image
                src="/images/logo.png"
                width="85px"
                height="30px"
                alt="image"
              />
            </div>
            <div className="col-5 ">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput3"
                placeholder="Search"
              />
            </div>
            <div className="col-1 ">
              <div
                className="card d-flex justify-content-center align-items-center"
                style={{
                  width: "25px",
                  height: "25px",
                  marginTop: "5px",
                  border: "1px solid #8E8E93",
                }}
              >
                <FiFilter />
              </div>
            </div>
            <div className="col-1 d-flex justify-content-end align-items-center">
              <FiShoppingCart style={{ height: "20px", width: "20px" }} />
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-danger">
                Login
              </button>
            </div>
            <div className="col-2 ">
              <button type="button" className="btn btn-outline-secondary">
                SignUp
              </button>
            </div>
          </div>
        </div>
        <div className={`container-fluid pt-4 ${homeStyle.content} `}>
          <div className="mb-2" style={{ padding: "10px 80px 15px 80px" }}>
            <Slider
              asNavFor={nav}
              ref={(slider2) => setNav(slider2)}
              slidesToShow={2}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              {promotion.map((item, key) => (
                <div key={key}>
                  <div className="card ">
                    <Image
                      src={`/images/${item}`}
                      width=" 400px"
                      height="120px"
                      alt="promotion"
                    />
                  </div>
                </div>
              ))}
            </Slider>
            <h2>Category</h2>
            <h6>What are you currently looking for</h6>
          </div>
          <div className="row" style={{ padding: "10px 80px 15px 80px" }}>
            <Slider
              asNavFor={nav2}
              ref={(slider2) => setNav2(slider2)}
              slidesToShow={5}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              {category.map((item, key) => (
                <div key={key}>
                  <div className="card ">
                    <Image
                      src={`/images/${item}`}
                      width="100px"
                      height="220px"
                      alt="t-shirt"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="mb-2" style={{ padding: "10px 80px 15px 80px" }}>
            <h2>New</h2>
            <h6>You’ve never seen it before!</h6>
          </div>
          {[...new Array(3)].map((item, key) => (
            <div className="row" key={key}>
              <div className="col-1"></div>
              {[...new Array(5)].map((item, key) => (
                <div className="col-2" key={key}>
                  <Image
                    src={`/images/contain.png`}
                    width=" 200px"
                    height="280px"
                    alt="contain"
                  />
                </div>
              ))}
              <div className="col-1"></div>
            </div>
          ))}
          <div className="mb-2" style={{ padding: "10px 80px 15px 80px" }}>
            <h2>Popular</h2>
            <h6>Find clothes that are trending recently</h6>
          </div>
          {[...new Array(3)].map((item, key) => (
            <div className="row" key={key}>
              <div className="col-1"></div>
              {[...new Array(5)].map((item, key) => (
                <div className="col-2" key={key}>
                  <Image
                    src={`/images/contain.png`}
                    width=" 200px"
                    height="280px"
                    alt="contain"
                  />
                </div>
              ))}
              <div className="col-1"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
