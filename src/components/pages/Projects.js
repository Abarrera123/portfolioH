import React from "react";

const Projects =() => (

    <section id="recent">
    {/* <!--heading--> */}
    <div class="recent-heading">
        <h3>Recent Completed Projects</h3>
    </div>
    {/* <!--proj-pic&details--> */}
    <div class="p-box-container">
        <div class="proj-box1">
            <div class="recent-img1">
                <a href='https://github.com/Abarrera123/tony-e-commerce-back-end'>
                    {/* <img alt='E-commerce-backend-pic' src='.../assets/images/E-commerce-BE.PNG'/> */}
                </a>
            </div>
            <div class="proj-box1-text">
                <strong>E Commerce Backend</strong>
                <p>This is a mock of a department store's back end that helps the owner of the store keep track of
                    inventory. This project uses sequalize and mysql to allow the user to easily view,post,update,
                    and delete items from their database. In the picture you can see what is shown when the GET
                    method is called for the route "/api/categories". </p>
            </div>
        </div>
        <div class="proj-box2">

            <div class="proj-box2-text">
                <strong>Green Thumb</strong>
                <p>This is a full stack application that allows users to track the progress of their gardens. The
                    application allows the users to first create an account or to log in into an excisting account.
                    If the user is signing up for the first time, they will be prompted to build their garden. The
                    user then chooses what plants they would like to track in their garden. When the user creates
                    their virtual garden they then have the option to click on the plants within their garden to
                    recive details about the plant. This application is only in its first phase and is still under
                    development. </p>
            </div>
            <div class="recent-img2">
                <a href='https://shrouded-reaches-54624.herokuapp.com/'>
                    {/* <img alt ='greenthumb-project' src='.../assets/images/greenthumb.PNG'/> */}
                </a>
            </div>
        </div>
    </div>
    {/* <!--btn--> */}
    <a href="https://github.com/Abarrera123?tab=repositories" class="recent-btn">View Projects</a>
</section>
);

export default Projects;
