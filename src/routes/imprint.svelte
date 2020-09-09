<svelte:head>
	<title>Imprint</title>
</svelte:head>

<script>
	import Quote from '../components/Quote.svelte'
	import Hero from '../components/Hero.svelte'
	import MobileHero from '../components/MobileHero.svelte'
	import MobileImage from '../components/MobileImage.svelte'
	import MobileQuote from '../components/MobileQuote.svelte'
	import MobileSubFooter from '../components/MobileSubFooter.svelte'
</script>

<style>
    .photos {
        padding: 8vmax 5vmax;
        background: url('/about/meet_team_shape.svg') left center no-repeat;
        background-size: 100%;
        /* color: #fff !important; */
    }
    .photos h1 {
        margin-bottom: 20px;
    }
    .grid-container {
        width: 80%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 4% 4%;
        grid-template-areas: ". . . ." ". . . ." ". . . .";
    }

    span {
        color: #202020;
        font-weight: bold;
    }
    .grid-container div img{
        object-fit: cover;

    }
    .title {
        margin-top: 10px;
        font-size: .8rem;
        font-family: var(--body-fonts);
        background: #fff;
        float: left;
        padding: 2px 10px;
        box-shadow: 0 0 5px #00000021;
        border-radius: 50px;
    }

    @media only screen and (max-width:1024px) {
    .grid-container {
        width: 80%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 4% 4%;
        grid-template-areas: ". ." ". ." ". ." ". ." ". ." ". .";
    }
    span   {
        color: #202020; 

    }
    .title {
        margin-top: 10px;
        font-size: .7rem;
        font-family: var(--body-fonts);
        color: #202020; 
        box-shadow: none;
    }
    }
</style>
<Hero
	subheader=""
	header="Imprint"
	text=""
	bgURL='/about/start_shape_team.svg'
	isAux=''
/>

<MobileHero
	heading="Imprint"
	text=""
/>

<p style='margin-bottom: 10px;'> <br> Kontakt: <br> 

Jonathan Kuhl & Henrik Bredenbals <br> c/o CODE University <br> Lohmühlenstrasse 65 <br> 10435 Berlin <br> E-Mail: jonathan.kuhl@code.berlin <br><br>

Haftung für Links <br><br>
Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.

<br><br>Urheberrecht <br><br>
Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.

<br><br> Datenschutz <br><br>
Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.

<br><br> Google Analytics <br><br>
Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. (''Google''). Google Analytics verwendet sog. ''Cookies'', Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden. </p>
