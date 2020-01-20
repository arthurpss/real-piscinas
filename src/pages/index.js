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
        <div id="sticky-header" className="main-header-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-2">
                <div className="logo">
                  *Logo*
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
                  Real
                </span> <br/>
                Piscinas
              </h3>
              <p>
                Especializada em confecção e manutenção de piscinas no DF,
                <br/>
                trabalhando com os melhores materiais e profissionais.
              </p>
              <a href="#" className="boxed-btn3">Conheça a loja</a>
            </div>
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
                <img src={require('../assets/images/images.jpeg')} alt=""/>
              </div>
              <div className="thumb_2">
                <img src={require('../assets/images/produtos.png')} alt=""/>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="welcome_docmed_info">
              <h2>Bem vindo a Real Piscinas</h2>
              <h3>Os melhores produtos<br/>
                para a sua piscina</h3>
              <p>Trabalhamos com produtos HTH, Genco, (...)</p>
              <ul>
                <li><i className="flaticon-right"></i> Cloro</li>
                <li><i className="flaticon-right"></i> Equipamentos para limpeza</li>
                <li><i className="flaticon-right"></i> Robôs</li>
              </ul>
              <a href="#" className="boxed-btn3-white-2">Veja mais</a>
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
              <h3>Nossos serviços</h3>
              <p>Cuidamos da saúde da sua piscina em qualquer situação.</p>
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
                <h3><a href="#">Água verde</a></h3>
                <p>(...)</p>
                <a href="#" className="learn_more">Veja mais</a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_department">
              <div className="department_thumb">
                <img src="img/department/2.png" alt=""/>
              </div>
              <div className="department_content">
                <h3><a href="#">Água gordurosa</a></h3>
                <p>(...)</p>
                <a href="#" className="learn_more">Veja mais</a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_department">
              <div className="department_thumb">
                <img src="img/department/3.png" alt=""/>
              </div>
              <div className="department_content">
                <h3><a href="#">Manchas</a></h3>
                <p>(...)</p>
                <a href="#" className="learn_more">Veja mais</a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_department">
              <div className="department_thumb">
                <img src="img/department/4.png" alt=""/>
              </div>
              <div className="department_content">
                <h3><a href="#">Rachaduras</a></h3>
                <p>(...)</p>
                <a href="#" className="learn_more">Veja mais</a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_department">
              <div className="department_thumb">
                <img src="img/department/5.png" alt=""/>
              </div>
              <div className="department_content">
                <h3><a href="#">Problemas na bomba</a></h3>
                <p>(...)</p>
                <a href="#" className="learn_more">Veja mais</a>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="single_department">
              <div className="department_thumb">
                <img src="img/department/6.png" alt=""/>
              </div>
              <div className="department_content">
                <h3><a href="#">Sistema de aquecimento</a></h3>
                <p>(...)</p>
                <a href="#" className="learn_more">Veja mais</a>
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
                  <img src={require('../assets/images/thumb1.jpg')} alt=""/>
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
                <h3>Contato WhatsApp</h3>
                <p>Entre em contato para um atendimento personalizado</p>
              </div>
              <div className="info_button">
                <a href="#" className="boxed-btn3-white">61 99610-8589</a>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div
              className="single_emergency d-flex align-items-center justify-content-center emergency_bg_2 overlay_skyblue">
              <div className="info">
                <h3>Faça um orçamento online</h3>
                <p>Simule um serviço ou a compra de produtos</p>
              </div>
              <div className="info_button">
                <a href="#" className="boxed-btn3-white">Fazer orçamento</a>
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
                  *logo*
                  <a href="#">
                    <img src="img/footer_logo.png" alt=""/>
                  </a>
                </div>
                <p>
                  Siga nossas redes sociais para receber dicas, promoções
                  e conteúdo relacionado.
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
