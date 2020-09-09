<style>
    footer {
        margin: 5vmax 0 0 0;
        /* height: vmax; */
        width: 100%;
        position: relative;
        background: #fff url('/students/footer_shape.svg');
    }

    .wrapper {
        width: 100%;
        padding: 5vmax;
        display: grid;
        grid-template-columns: .5fr 1fr;
        grid-template-rows: 1fr;
        gap: 0px 0px;
        grid-template-areas: "logo links";
    }

    .logo img{
        height: 5vmax;
    }
    .logo { grid-area: logo; }

    .links { grid-area: links; margin: auto;}
    
    ul li{
        margin-right: 3vmax;
        display: inline;
        color: #fff;
    }

    ul li a {
        color: #fff;
        text-decoration: none;
        border-bottom: 2px solid #d3292f00;
        padding-bottom: 5px;
        transition: all .35s ease;
    }

    ul li a:hover {
        border-bottom: 2px solid;
    }
    .icon {
        border: none;
        font-size: 1.5vmax;
    }
    .icon:hover {
        border: none;
    }

    @media only screen and (max-width:1024px) {
        .wrapper {
            display: flex;
            flex-direction: column;
            padding: 7vmax 5vmax;
        }

        ul {
            display: flex;
            flex-direction: column;
        }

        ul li {
            margin: 10px 0;
        }

        .links {
            margin: 0;
        }
    }
</style>


<footer>
    <div class="wrapper">
        <div class="logo">
            <img src="/logos/varry_logo_white.png" alt="">
        </div>

        <div class="links">
            <ul>
                <li><a href="imprint">Imprint</a></li>
                <li><a href="terms">Terms of Use</a></li>
                <li>&copy;2020 All rights reserved.</li>
                <li><a href="https://www.linkedin.com/company/varryboost" class="icon"><i class="fab fa-linkedin"></i></a></li>
            </ul>
        </div>
    </div>
</footer>