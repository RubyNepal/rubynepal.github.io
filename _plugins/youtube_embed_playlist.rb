# Jekyll - Easy Youtube Embed
#
# Saroj Maharjan - https://github.com/zoras
#
#   Usage:
#     {% youtube_embed_playlist PLg3mQu9T3dCB0qcyMyMjSFq006C0Q4Ztd %}
#
# Support page:
#   https://support.google.com/youtube/answer/171780?hl=en
#   https://github.com/dommmel/jekyll-youtube
#   https://github.com/pibby/jekyll-youtube
#

class YoutubeEmbedPlaylist < Liquid::Tag
  @url = nil

  VIDEO_URL = /(\S+)/i

  def initialize(tag_name, markup, tokens)
    super

    if markup =~ VIDEO_URL
      @url = $1
    end
  end

  def render(context)
    tmpl_path = File.join Dir.pwd, "_includes", "youtube.html"
    if File.exist?(tmpl_path)
      tmpl = File.read tmpl_path
      site = context.registers[:site]
      (Liquid::Template.parse tmpl).render site.site_payload.merge!({"youtube_id" => @url})
    else
      %Q{<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'>    <iframe title="YouTube video player" width="640" height="390" src="//www.youtube.com/embed/videoseries?list=#{@url}&autoplay=1" frameborder="0" allowfullscreen></iframe></div>}
    end
  end
end

Liquid::Template.register_tag('youtube_embed_playlist', YoutubeEmbedPlaylist)
