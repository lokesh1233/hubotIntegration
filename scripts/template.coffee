# Description
#   <description of the scripts functionality>
#
# Dependencies:
#   "<module name>": "<module version>"
#
# Configuration:
#   LIST_OF_ENV_VARS_TO_SET
#
# Commands:
#   hubot <trigger> - <what the respond trigger does>
#   <trigger> - <what the hear trigger does>
#
# URLS:
#   GET /path?param=<val> - <what the request does>
#
# Notes:
#   <optional notes required for the script>
#
# Author:
#   <github username of the original script author>

module.exports = (robot) ->

  robot.respond /jump/i, (msg) ->
    msg.emote "jumping!"

  robot.hear /your'e/i, (msg) ->
    msg.send "you're"

  robot.hear /what year is it\?/i, (msg) ->
    msg.reply new Date().getFullYear()

  robot.router.get "/foo", (req, res) ->
    res.end "bar"