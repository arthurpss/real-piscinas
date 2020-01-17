import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/docmed-master/css/owl.carousel.min.css'
import '../assets/docmed-master/css/magnific-popup.css'
import '../assets/docmed-master/css/font-awesome.min.css'
import '../assets/docmed-master/css/themify-icons.css'
import '../assets/docmed-master/css/nice-select.css'
import '../assets/docmed-master/css/flaticon.css'
import '../assets/docmed-master/css/gijgo.css'
import '../assets/docmed-master/css/animate.css'
import '../assets/docmed-master/css/slicknav.css'
import '../assets/docmed-master/css/style.css'

export default () =>
  <div>
    <header>
      <div className="header-area ">
        <div className="header-top_area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-6 ">
                <div className="social_media_links">
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-md-6">
                <div className="short_contact_list">
                  <ul>
                    <li><a href="#"> <i className="fa fa-envelope"></i> info@docmed.com</a></li>
                    <li><a href="#"> <i className="fa fa-phone"></i> (61) 3000-3000 </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sticky-header" className="main-header-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-2">
                <div className="logo">
                  <a href="index.html">
                    <img src="img/logo.png" alt=""/>
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="main-menu  d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li><a href="Department.html">Serviços</a></li>
                      <li><a href="Doctors.html">Produtos</a></li>
                      <li><a href="contact.html">Contatos</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                <div className="Appointment">
                  <div className="book_btn d-none d-lg-block">
                    <a className="popup-with-form" href="#test-form">Faça um orçamento</a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="banner_inicial">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="texto_banner">
              <h3>
                <span>
                  Real Piscinas
                </span>
              </h3>
            </div>
            <p>In healthcare sector, service excellence is the facility of <br/> the hospital as
              healthcare service provider to consistently.</p>
            <a href="#" className="boxed-btn3">Conheça a loja</a>
          </div>
        </div>
      </div>
    </div>


    {/*<div className="slider_area">
      <div className="slider_active owl-carousel">
        <div className="single_slider  d-flex align-items-center slider_bg_2">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="slider_text ">
                  <h3><span>Health care</span> <br/>
                    For Hole Family</h3>
                  <p>In healthcare sector, service excellence is the facility of <br/> the hospital as
                    healthcare service provider to consistently.</p>
                  <a href="#" className="boxed-btn3">Check Our Services</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single_slider  d-flex align-items-center slider_bg_1">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="slider_text ">
                  <h3><span>Health care</span> <br/>
                    For Hole Family</h3>
                  <p>In healthcare sector, service excellence is the facility of <br/> the hospital as
                    healthcare service provider to consistently.</p>
                  <a href="#" className="boxed-btn3">Check Our Services</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single_slider  d-flex align-items-center slider_bg_2">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="slider_text ">
                  <h3><span>Health care</span> <br/>
                    For Hole Family</h3>
                  <p>In healthcare sector, service excellence is the facility of <br/> the hospital as
                    healthcare service provider to consistently.</p>
                  <a href="#" className="boxed-btn3">Check Our Services</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>*/}
    <div className="welcome_docmed_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="welcome_thumb">
              <div className="thumb_1">
                <img src={require('../assets/images/depositphotos_3898789-stock-photo-swimming-pool.jpg')} alt=""/>
              </div>
              <div className="thumb_2">
                <img src={require('../assets/images/Expolazer_Polimento.jpg')} alt=""/>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="welcome_docmed_info">
              <h2>Welcome to Docmed</h2>
              <h3>Best Care For Your <br/>
                Good Health</h3>
              <p>Esteem spirit temper too say adieus who direct esteem.
                It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable
                projecting expression.</p>
              <ul>
                <li><i className="flaticon-right"></i> Apartments frequently or motionless.</li>
                <li><i className="flaticon-right"></i> Duis aute irure dolor in reprehenderit in voluptate.</li>
                <li><i className="flaticon-right"></i> Voluptatem quia voluptas sit aspernatur.</li>
              </ul>
              <a href="#" className="boxed-btn3-white-2">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="our_department_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title text-center mb-55">
              <h3>Our Departments</h3>
              <p>Esteem spirit temper too say adieus who direct esteem. <br/>
                It esteems luckily or picture placing drawing.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_department">
              <div className="department_thumb">
                <img src="img/department/1.png" alt=""/>
              </div>
              <div className="department_content">
                <h3><a href="#">Eye Care</a></h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="#" className="learn_more">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_department">
              <div className="department_thumb">
                <img src="img/department/2.png" alt=""/>
              </div>
              <div className="department_content">
                <h3><a href="#">Physical Therapy</a></h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="#" className="learn_more">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_department">
              <div className="department_thumb">
                <img src="img/department/3.png" alt=""/>
              </div>
              <div className="department_content">
                <h3><a href="#">Dental Care</a></h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="#" className="learn_more">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_department">
              <div className="department_thumb">
                <img src="img/department/4.png" alt=""/>
              </div>
              <div className="department_content">
                <h3><a href="#">Diagnostic Test</a></h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="#" className="learn_more">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_department">
              <div className="department_thumb">
                <img src="img/department/5.png" alt=""/>
              </div>
              <div className="department_content">
                <h3><a href="#">Skin Surgery</a></h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="#" className="learn_more">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_department">
              <div className="department_thumb">
                <img src="img/department/6.png" alt=""/>
              </div>
              <div className="department_content">
                <h3><a href="#">Surgery Service</a></h3>
                <p>Esteem spirit temper too say adieus who direct esteem.</p>
                <a href="#" className="learn_more">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="testmonial_area">
      <div className="testmonial_active owl-carousel">
        <div className="single-testmonial testmonial_bg_1 overlay2">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 offset-xl-1">
                <div className="testmonial_info text-center">
                  <div className="quote">
                    <i className="flaticon-straight-quotes"></i>
                  </div>
                  <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br/>
                    sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.
                    <br/>
                      Fusce ac mattis nulla. Morbi eget ornare dui.</p>
                  <div className="testmonial_author">
                    <h4>Asana Korim</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-testmonial testmonial_bg_2 overlay2">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 offset-xl-1">
                <div className="testmonial_info text-center">
                  <div className="quote">
                    <i className="flaticon-straight-quotes"></i>
                  </div>
                  <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br/>
                    sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.
                    <br/>
                      Fusce ac mattis nulla. Morbi eget ornare dui.</p>
                  <div className="testmonial_author">
                    <h4>Asana Korim</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-testmonial testmonial_bg_1 overlay2">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 offset-xl-1">
                <div className="testmonial_info text-center">
                  <div className="quote">
                    <i className="flaticon-straight-quotes"></i>
                  </div>
                  <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor <br/>
                    sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.
                    <br/>
                      Fusce ac mattis nulla. Morbi eget ornare dui.</p>
                  <div className="testmonial_author">
                    <h4>Asana Korim</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="business_expert_area">
      <div className="business_tabs_area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <ul className="nav" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab"
                     aria-controls="home"
                     aria-selected="true">Excellent Services</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab"
                     aria-controls="profile"
                     aria-selected="false">Qualified Doctors</a>
                </li>


                <li className="nav-item">
                  <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab"
                     aria-controls="contact"
                     aria-selected="false">Emergency Departments</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <div className="container">
        <div className="border_bottom">
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

              <div className="row align-items-center">
                <div className="col-xl-6 col-md-6">
                  <div className="business_info">
                    <div className="icon">
                      <i className="flaticon-first-aid-kit"></i>
                    </div>
                    <h3>Leading edge care for Your family</h3>
                    <p>Esteem spirit temper too say adieus who direct esteem.
                      It esteems luckily picture placing drawing. Apartments frequently or motionless on
                      reasonable projecting expression.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="business_thumb">
                    <img src="img/about/business.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div className="row align-items-center">
                <div className="col-xl-6 col-md-6">
                  <div className="business_info">
                    <div className="icon">
                      <i className="flaticon-first-aid-kit"></i>
                    </div>
                    <h3>Leading edge care for Your family</h3>
                    <p>Esteem spirit temper too say adieus who direct esteem.
                      It esteems luckily picture placing drawing. Apartments frequently or motionless on
                      reasonable projecting expression.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="business_thumb">
                    <img src="img/about/business.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
              <div className="row align-items-center">
                <div className="col-xl-6 col-md-6">
                  <div className="business_info">
                    <div className="icon">
                      <i className="flaticon-first-aid-kit"></i>
                    </div>
                    <h3>Leading edge care for Your family</h3>
                    <p>Esteem spirit temper too say adieus who direct esteem.
                      It esteems luckily picture placing drawing. Apartments frequently or motionless on
                      reasonable projecting expression.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-md-6">
                  <div className="business_thumb">
                    <img src="img/about/business.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="expert_doctors_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="doctors_title mb-55">
              <h3>Produtos</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="expert_active owl-carousel">
              <div className="single_expert">
                <div className="expert_thumb">
                  <img src="img/experts/1.png" alt=""/>
                </div>
                <div className="experts_name text-center">
                  <h3>Mirazul Alom</h3>
                  <span>Neurologist</span>
                </div>
              </div>
              <div className="single_expert">
                <div className="expert_thumb">
                  <img src="img/experts/2.png" alt=""/>
                </div>
                <div className="experts_name text-center">
                  <h3>Mirazul Alom</h3>
                  <span>Neurologist</span>
                </div>
              </div>
              <div className="single_expert">
                <div className="expert_thumb">
                  <img src="img/experts/3.png" alt=""/>
                </div>
                <div className="experts_name text-center">
                  <h3>Mirazul Alom</h3>
                  <span>Neurologist</span>
                </div>
              </div>
              <div className="single_expert">
                <div className="expert_thumb">
                  <img src="img/experts/4.png" alt=""/>
                </div>
                <div className="experts_name text-center">
                  <h3>Mirazul Alom</h3>
                  <span>Neurologist</span>
                </div>
              </div>
              <div className="single_expert">
                <div className="expert_thumb">
                  <img src="img/experts/1.png" alt=""/>
                </div>
                <div className="experts_name text-center">
                  <h3>Mirazul Alom</h3>
                  <span>Neurologist</span>
                </div>
              </div>
              <div className="single_expert">
                <div className="expert_thumb">
                  <img src="img/experts/2.png" alt=""/>
                </div>
                <div className="experts_name text-center">
                  <h3>Mirazul Alom</h3>
                  <span>Neurologist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="Emergency_contact">
      <div className="conatiner-fluid p-0">
        <div className="row no-gutters">
          <div className="col-xl-6">
            <div
              className="single_emergency d-flex align-items-center justify-content-center emergency_bg_1 overlay_skyblue">
              <div className="info">
                <h3>For Any Emergency Contact</h3>
                <p>Esteem spirit temper too say adieus.</p>
              </div>
              <div className="info_button">
                <a href="#" className="boxed-btn3-white">+10 378 4673 467</a>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div
              className="single_emergency d-flex align-items-center justify-content-center emergency_bg_2 overlay_skyblue">
              <div className="info">
                <h3>Make an Online Appointment</h3>
                <p>Esteem spirit temper too say adieus.</p>
              </div>
              <div className="info_button">
                <a href="#" className="boxed-btn3-white">Make an Appointment</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="footer">
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-md-6 col-lg-4">
              <div className="footer_widget">
                <div className="footer_logo">
                  <a href="#">
                    <img src="img/footer_logo.png" alt=""/>
                  </a>
                </div>
                <p>
                  Firmament morning sixth subdue darkness
                  creeping gathered divide.
                </p>
                <div className="socail_links">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="ti-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-twitter-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
            <div className="col-xl-2 offset-xl-1 col-md-6 col-lg-3">
              <div className="footer_widget">
                <h3 className="footer_title">
                  Departments
                </h3>
                <ul>
                  <li><a href="#">Eye Care</a></li>
                  <li><a href="#">Skin Care</a></li>
                  <li><a href="#">Pathology</a></li>
                  <li><a href="#">Medicine</a></li>
                  <li><a href="#">Dental</a></li>
                </ul>

              </div>
            </div>
            <div className="col-xl-2 col-md-6 col-lg-2">
              <div className="footer_widget">
                <h3 className="footer_title">
                  Useful Links
                </h3>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#"> Contact</a></li>
                  <li><a href="#"> Appointment</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-lg-3">
              <div className="footer_widget">
                <h3 className="footer_title">
                  Address
                </h3>
                <p>
                  200, D-block, Green lane USA <br/>
                  +10 367 467 8934 <br/>
                  docmed@contact.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right_text">
        <div className="container">
          <div className="footer_border"></div>
          <div className="row">
            <div className="col-xl-12">
              <p className="copy_right text-center">
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script>
                All rights reserved | This template is made with <i className="fa fa-heart-o"
                                                                    aria-hidden="true"></i> by <a
                href="https://colorlib.com" target="_blank">Colorlib</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <form id="test-form" className="white-popup-block mfp-hide">
      <div className="popup_box ">
        <div className="popup_inner">
          <h3>Make an Appointment</h3>
          <form action="#">
            <div className="row">
              <div className="col-xl-6">
                <input id="datepicker" placeholder="Pick date"/>
              </div>
              <div className="col-xl-6">
                <input id="datepicker2" placeholder="Suitable time"/>
              </div>
              <div className="col-xl-6">
                <select className="form-select wide" id="default-select" className="">
                  <option data-display="Select Department">Department</option>
                  <option value="1">Eye Care</option>
                  <option value="2">Physical Therapy</option>
                  <option value="3">Dental Care</option>
                </select>
              </div>
              <div className="col-xl-6">
                <select className="form-select wide" id="default-select" className="">
                  <option data-display="Doctors">Doctors</option>
                  <option value="1">Mirazul Alom</option>
                  <option value="2">Monzul Alom</option>
                  <option value="3">Azizul Isalm</option>
                </select>
              </div>
              <div className="col-xl-6">
                <input type="text" placeholder="Name"/>
              </div>
              <div className="col-xl-6">
                <input type="text" placeholder="Phone no."/>
              </div>
              <div className="col-xl-12">
                <input type="email" placeholder="Email"/>
              </div>
              <div className="col-xl-12">
                <button type="submit" className="boxed-btn3">Confirm</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </form>
  </div>
