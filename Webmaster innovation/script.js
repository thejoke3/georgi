document.getElementById('domain-search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('domain-search-input').value.trim();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (!query) {
        resultsContainer.innerHTML = '<p>Please enter a domain to search.</p>';
        return;
    }

    // Show loading indicator
    const loadingIndicator = document.createElement('p');
    loadingIndicator.textContent = 'Searching...';
    resultsContainer.appendChild(loadingIndicator);

    // Simulate an API call with a timeout
    setTimeout(() => {
        // Mock data to simulate domain search results with appended query
        const mockResults = [
            { domain: query + '.com', price: '9.99 EUR/year' },
            { domain: query + '.net', price: '8.99 EUR/year' },
            { domain: query + '.org', price: '7.99 EUR/year' },
            { domain: query + '.co', price: '12.99 EUR/year' },
            { domain: query + '.tech', price: '6.99 EUR/year' },
            { domain:query + '.w3school.com', price:'10.99 EUR/year' }
        ]; 

        // Clear loading indicator
        resultsContainer.innerHTML = '';

        if (mockResults.length === 0) {
            resultsContainer.innerHTML = '<p>No domains found.</p>';
            return;
        }

        mockResults.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `
                <h3>${result.domain}</h3>
                <p>Price: ${result.price}</p>
            `;
            resultsContainer.appendChild(resultItem);
        });
    }, 1000); // Simulate network delay
});
