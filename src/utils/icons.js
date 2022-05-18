const SOCIAL_ICON_DICT = {
    FACEBOOK: 'logo-facebook', 
    GITHUB : 'logo-github',
    INSTAGRAM: 'logo-instagram',
    REDDIT: 'logo-reddit',
    TIKTOK: 'logo-tiktok',
    TWITCH: 'logo-twitch',
    TWITTER: 'logo-twitter'
}

export const getSocialIcon = (social) => {
    return SOCIAL_ICON_DICT[social]
}