export default {
  /**
   * Swap out inline content images with full URL.
   */
  imgUrl(content) {
    let baseUrl = process.env.API_URL || 'https://serundeputy.io'
    let contentWithImages = content.replace(/\/files\//g, baseUrl + '/files/')

    return contentWithImages
  }
}
