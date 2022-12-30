class libhookz {
    constructor(link, hex, top, title, description, setting) {
        this.link = link;
        this.hex = hex;
        this.top = top;
        this.title = title;
        this.description = description;
        this.setting = setting;
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
            <meta name="twitter:description" content="${this.description}" />
            <link type="application/json+oembed" href="${this.top}" />
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
            <meta name="twitter:description" content="${this.description}" />
            <link type="application/json+oembed" href="${this.top}" />
            <meta name="theme-color" content="${this.hex}"/>
        </head>
    </html>`;
    }
}

module.exports = libhookz;
