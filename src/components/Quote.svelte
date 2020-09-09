<script>
export let heading;
export let subtext;
export let buttonBool;
export let buttonLink;
export let buttonText;
export let threeBoxes;
export let fullWidth='false';
export let leftAlign=false;
export let quote=false;
</script>

<style>

h1 {
    font-size: 2.5vmax;
    margin-bottom: 20px;
    color: var(--text-blue);
}

.quote {
    padding: 10vmax 0;
    display: flex;
    width: 80%;
    justify-content: center;
    margin: 0 auto;
    align-items: flex-start;
}

.quote.leftAlign {
    justify-content: flex-start;
    margin: 0;
}

.quote > img {
    width: 30%;
    margin: 0 3vmax;
}

.quote .wrapper {
    width: 100%;
    text-align: center;
}

.quote.leftAlign .wrapper {
    text-align: left;
}

.quoteQuote {
    text-align: right;
}

.lead {
    font-size: 1.3vmax;
    margin-bottom: 20px;
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
    font-size: 80%;
    margin-left: 10px;
    color: var(--text-red);
}
</style>
<section class="quote {fullWidth}" class:leftAlign>
    {#if leftAlign}
        <img src="/logos/varry_wave_gradient.png" alt="">
    {/if}
    <div class="wrapper">
        <h1>{heading}</h1>
        <p class="lead" class:quoteQuote={quote}>{@html subtext}</p>

        {#if buttonBool === "true"}
        <p class="lead button">
            <a href="{buttonLink}" class="button-primary">{buttonText}</a>
        </p>
        {/if}

        {#if threeBoxes === "true"}
            <div class="grid-container">
                <div class="workshops">
                    <h1>Workshops <i class="fas fa-briefcase"></i></h1>
                    <p class="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elitadipisicing elitadipisicing elit
                    </p>
                </div>
                <div class="input">
                <h1>Input Sessions <i class="fas fa-comment-alt"></i></h1>
                    <p class="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elitadipisicing elitadipisicing elit
                    </p>
                </div>
                <div class="mentor">
                <h1>Mentorship <i class="fas fa-mug-hot"></i></h1>
                    <p class="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elitadipisicing elitadipisicing elit
                    </p>
                </div>
            </div>
        {/if}
    </div>
</section>