<script>
    import Box from '../components/Box.svelte'
</script>
<style>
.triple {
    width: 100%;
    margin: 5vmax 0;
    background: #F4F5FA;
    padding: 5vmax;
}
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 1px 1px;
    grid-template-areas: "heading person-one person-two";
}

.person-one, .person-two {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 13px rgba(0,0,0,0.1);
    width: 90%;
    padding: 2vmax 3vmax;
}

h1 {
    font-size: 3vmax;
    color: var(--text-blue);
}
.person-one { grid-area: person-one; justify-content: center;}

.person-two { grid-area: person-two; }

.heading { grid-area: heading; }
</style>


<section class="triple">
    <div class="grid-container">
        <div class="heading">
            <h1>Latest Varry experiences.</h1>
        </div>
        <div class="person-one">
            <Box
                imageUrl="/partners/futury_laura@2x.png"
                quote="We aim to bring young talents and market leaders together to create and work on innovative ideas. With Varry we got access to this pool of amazing and ambitious students and are happy to to not only inspire them with our workshops, but also get inspired by their energy."
                name ="Laura Gevorgyan"
                title="Talent Management &amp; Digital Marketing, Futury"
            />
        </div>
        <div class="person-two">
        
            <Box
                imageUrl="/partners/neugelb_stephanie@2x.png"
                quote="Varry is a new way for our company to connect with young professionals. We are excited to be part of this passionate community and co-create new learning opportunities. After the first pilot we successfully hired an intern from the participants and are looking forward to work with her."
                name ="Stephanie"
                title="Talent Acquisition, Neugelb"
            />
        </div>
    </div>
</section>