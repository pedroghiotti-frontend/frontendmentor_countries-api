class FlagCard extends HTMLElement
{
    async connectedCallback()
    {
        // Retrieve html from file.
        let res = await fetch( './components/flag-card/flagCard_template.html' )

        // Create shadow root.
        const shadow = this.attachShadow( { mode: 'closed' } );

        // Insert html into shadow.
        shadow.innerHTML = await res.text();

        // Insert content into HTML.
        shadow.querySelector('#image').setAttribute('src', this.getAttribute('imgSrc'));
        shadow.querySelector('#name').textContent = this.getAttribute('name');
        shadow.querySelector('#population').textContent = this.getAttribute('population');
        shadow.querySelector('#region').textContent = this.getAttribute('region');
        shadow.querySelector('#capital').textContent = this.getAttribute('capital');
    }
}

customElements.define("flag-card", FlagCard);