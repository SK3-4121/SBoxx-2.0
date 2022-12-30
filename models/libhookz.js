class libhookz {
    constructor(real, link, hex, title, description, setting, author_name, author_url, provider_name, provider_url) {
        this.real = real;
        this.link = link;
        this.hex = hex;
        this.title = title;
        this.description = description;
        this.setting = setting;

        this.author_name = author_name;
        this.author_url = author_url;
        this.provider_name = provider_name;
        this.provider_url = provider_url;
    }

    one() {
        return `<html>
        <head>
            <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
            <meta name="twitter:card" content="player" />
            <meta name="twitter:site" content="@harry" />
            <meta name="twitter:player:width" content="320" />
            <meta name="twitter:player:height" content="180" />
            <meta name="twitter:player:stream:content_type" content="video/mp4" />
            <meta property="og:image" content="${this.link}"/>
            <meta name="twitter:card" content="summary_large_image">
        </head>
    </html>`;
    }

    two() {
        return `<html>
        <head>
            <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
            <meta name="twitter:card" content="player" />
            <meta name="twitter:site" content="@harry" />
            <meta name="twitter:player:width" content="320" />
            <meta name="twitter:player:height" content="180" />
            <meta name="twitter:player:stream:content_type" content="video/mp4" />
            <meta property="og:image" content="${this.link}"/>
            <meta name="twitter:card" content="summary_large_image">
        </head>
    </html>`;
    }

    three() {
        return `<html>
        <head>
            <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
            <meta name="twitter:card" content="player" />
            <meta name="twitter:site" content="@harry" />
            <meta name="twitter:player:width" content="320" />
            <meta name="twitter:player:height" content="180" />
            <meta name="twitter:player:stream:content_type" content="video/mp4" />
            <meta property="og:image" content="${this.link}"/>
            <meta name="twitter:card" content="summary_large_image">
            
            <meta name="twitter:title" content="${this.title}" />
            <meta name="og:title" content="${this.title}" />

            <meta name="og:description" content="${this.description}" />
            <meta name="twitter:description" content="${this.description}" />
        </head>
    </html>`;
    }

    four() {
        return `<html>
        <head>
            <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
            <meta name="twitter:card" content="player" />
            <meta name="twitter:site" content="@harry" />
            <meta name="twitter:player:width" content="320" />
            <meta name="twitter:player:height" content="180" />
            <meta name="twitter:player:stream:content_type" content="video/mp4" />
            <meta property="og:image" content="${this.link}"/>
            <meta name="twitter:card" content="summary_large_image">

            <meta name="twitter:title" content="${this.title}" />
            <meta name="og:title" content="${this.title}" />

            <meta name="og:description" content="${this.description}" />
            <meta name="twitter:description" content="${this.description}" />

            <link type="application/json+oembed" href="http://${this.real}/jason?an=${this.author_name}&au=${this.author_url}&pn=${this.provider_name}&pu=${this.provider_url}" />
        </head>
    </html>`;
    }

    five() {
        return `<html>
        <head>
            <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
            <meta name="twitter:card" content="player" />
            <meta name="twitter:site" content="@harry" />
            <meta name="twitter:player:width" content="320" />
            <meta name="twitter:player:height" content="180" />
            <meta name="twitter:player:stream:content_type" content="video/mp4" />
            <meta property="og:image" content="${this.link}"/>
            <meta name="twitter:card" content="summary_large_image">

            <meta name="twitter:title" content="${this.title}" />
            <meta name="og:title" content="${this.title}" />

            <meta name="twitter:description" content="${this.description}" />
            <meta name="og:description" content="${this.description}" />

            <link type="application/json+oembed" href="http://${this.real}/jason?an=${this.author_name}&au=${this.author_url}&pn=${this.provider_name}&pu=${this.provider_url}" />

            <meta name="theme-color" content="${this.hex}"/>
        </head>
    </html>`;
    }
}

module.exports = libhookz;
