<script>
export let heading;
export let subtext;
export let buttonBool;
export let buttonLink;
export let buttonText;
export let threeBoxes;
export let fullWidth='false';
</script>

<style>

h1 {
    font-size: 3vmax;
    margin-bottom: 20px;
    color: var(--text-blue);
}

.quote {
    margin: 0 auto;
    padding: 2vmax 0;
    width: 50%;
}

.lead {
    font-size: 1.3vmax;
    margin-bottom: 40px;
    text-align: center;
    color: #42315C;
    font-weight: 600;
}
.button-primary {
    background: var(--text-red);
    text-decoration: none;
    color: #fff;
    padding: 10px 50px;
    font-size: 1rem;

    border-radius: 100px;
}
.wrapper {
    text-align: center;
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 10%;
    grid-template-areas: "workshops input mentor";
}

.workshops { grid-area: workshops; }
.input { grid-area: input; }
.mentor { grid-area: mentor; }

.grid-container div {
    background: #F4F5FA;
    border-radius: 10px;
    padding: 2vmax 1vmax;
}
.grid-container div .lead{
    text-align: left;
    font-size: 1vmax;
    opacity: .8;
    line-height: 1.4;
}
.grid-container div h1{
    font-size: 1.5vmax;
    font-family: 'Open Sans';
    text-align: left;
    font-weight: normal;
}
.fullWidth {
    width: 80%;
}

.fullWidth .wrapper>h1 {
    margin-bottom: 5vmax;
}

i {
    font-size: 280%;
    margin-left: 30px;
    color: var(--text-red);
}
</style>
<section class="quote {fullWidth}">
    <div class="wrapper">
        <h1>{heading}</h1>
        <p class="lead">{@html subtext}</p>

        {#if buttonBool === "true"}
        <p class="lead button">
            <a href="{buttonLink}" class="button-primary">{buttonText}</a>
        </p>
        {/if}

        {#if threeBoxes === "true"}
            <div class="grid-container">
                <div class="workshops">
                    <h1>Workshops <i class="fas fa-briefcase"></i></h1>
                    <p class="lead">Hold workshops in front of our student’s audience. Besides employer branding, this gives you an opportunity to let an independent group of people take a look at the things that surround you daily.</p>
                </div>
                <div class="input">
                <h1>Input Sessions <i class="fas fa-comment-alt"></i></h1>
                    <p class="lead">
                        Like a lecture at the university – but in much cooler. Here you can introduce frameworks, working principles or all other things that make you a unique employer.
                    </p>
                </div>
                <div class="mentor">
                <h1>Mentorship <i class="fas fa-mug-hot"></i></h1>
                    <p class="lead">
                        Mentor our students in their last steps before becoming extremely valuable professionals for the job market. With your knowledge, you are able to provide them with highly valuable feedback.
                    </p>
                </div>
            </div>
        {/if}
    </div>
</section>