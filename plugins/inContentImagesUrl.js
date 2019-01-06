export default {
  /**
   * Swap out inline content images with full URL.
   */
  imgUrl(content) {
    return content.replace(
      '/files/inline-images',
      'http://serundeputy.lndo.site/files/inline-images'
    )
  }
}
