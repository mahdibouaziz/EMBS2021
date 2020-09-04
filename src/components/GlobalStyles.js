import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   

    ${"" /* For all the titles */}
    .title{
        color: #263238;
    }

    ${"" /* Far all titles descriptions */}
    .paragraph{
        color: #546e7a;
    }

    ${"" /* Backgrounds */}
    .team-section,.about-section, 
    .training-section, .charity-section,
    .contact-section{
        background-color:#fff;
    }
    .sponsors-section {
         background-color: #f9f9f9;
    }
    .event-section , .visits-section, .collab-section{
        background-color: #ecf0f1;
    }
    .footer-section{
        background-color: #fff;
    }
    .Feedback {
        background-color: rgb(75, 164, 224);
    }
    ${"" /* Navbar 7el l Navbar ligne 19 badel men ghadi */}


    ${"" /* Hover effect for boxes */}
    .team-boxes:hover , .collab-box:hover,
    .act-boxes:hover {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }

    ${"" /* team-boxes + Collaboration */}
    .team-boxes , .collab-box{
      background-color:#f9f9f9;
    }
    .team-boxes .name{
        color: #263238;
    }
    .team-boxes .post ,.collab-box h2{
        color: #222;
    }
    .team-boxes  .social a{
        color: #0000a0;
        background: #f2f2f2;
    }
    .team-boxes  .social a:hover {
        background-color: #1768c5;
        color: #f2f2f2;
    }


    ${"" /* Activities Boxes + charity boxes*/}
    .act-boxes,.char-box{
        background-color: #fff;
    }
    .act-boxes .date,
    .act-boxes .training-date{
        color: #546e7a;
    }
    .act-boxes .desc , 
    .act-boxes .training-title{
        color:#222;
    }
    .act-boxes .training-desc{
        color: #5e6d74;
    }
    .act-boxes:hover .training-icon-1 {
        background: #e6f8ed;
        color: #57d283;
    }
    .act-boxes:hover  .training-icon{
        background: #f9f9f9;
    }


    ${"" /* Charity boxes */}
    .char-box h2, .char-box p{
        color: #546e7a;
    }
    .box2 h3{
        color: #263238;
    }

    .char-box p:nth-child(odd) {
        background-color: #f8f8f8;
    }

    ${"" /* Contact Page social + footer  */}
    .info .social a, .social-footer a {
        background-color: rgb(7, 7, 139);
    }

    .info .social a:hover,.social-footer a:hover {
         background-color: rgb(18, 18, 221);
         color: #fff;
    }

`;

export default GlobalStyle;
