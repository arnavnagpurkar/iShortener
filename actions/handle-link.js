"use server"
const accessToken = process.env.ACCESS_TOKEN;

export const handleSubmit = async (inputLink) => {
    const link = inputLink.trim();
    const linkCheck = (link) => {
        if (link) {
            if (!link.includes(" ")) {
                if (link.startsWith("https://") || link.startsWith("http://")) {
                    return true
                }
            }
            return false;
        }
        return false;
    }

    const shortenLink = async (longURL) => {
        const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                long_url: longURL
            })
        })
        const data = await response.json();
        const newLink = data.link;
        return newLink;
    }

    const isValid = linkCheck(link);

    if (isValid) {
        const shortenedLink = await shortenLink(link);
        return {
            isValid,
            shortenedLink
        }
    }

    return {
        isValid,
        shortenedLink: "Error: Input link not valid"
    }
}
