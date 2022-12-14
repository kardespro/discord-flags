
const flagsArray = [
  {"flags":"128", "content": "HOUSE_BRILLIANCE"},
  {"flags": "1", "content": "DISCORD_EMPLOYEE"},
  {"flags": "2", "content": "DISCORD_PARTNER"},
  {"flags": "4", "content": "HYPESQUAD_EVENTS"},
  {"flags": "8", "content": "BUG_HUNTER_LEVEL_1"},
  {"flags": "16", "content": "MFA_SMS"},
  {"flags": "32", "content": "PREMIUM_PROMO_DISMISSED"},
  {"flags": "64", "content": "HOUSE_BRAVERY"},
  {"flags": "256", "content": "HOUSE_BALANCE"},
  {"flags": "512", "content": "EARLY_SUPPORTER"},
  {"flags":"1024", "content": "TEAM_PSEUDO_USER"},
  {"flags": "2048", "content":"INTERNAL_APPLICATION"},
  {"flags": "4096", "content": "SYSTEM"},
  {"flags": "8192", "content": "HAS_UNREAD_URGENT_MESSAGES"},
  {"flags":"16384", "content": "BUG_HUNTER_LEVEL_2"},
  {"flags":"32768", "content": "UNDERAGE_DELETED"},
  {"flags":"65536", "content":  "VERIFIED_BOT"},
  {"flags":"131072", "content": "VERIFIED_BOT_DEVELOPER"},
  {"flags":"262144", "content":"CERTIFIED_MODERATOR"},
  {"flags":"524288", "content": "BOT_HTTP_INTERACTIONS"},
  {"flags":"1048576", "content": "SPAMMER"},
  {"flags":"2097152", "content":  "DISABLE_PREMIUM"},
  {"flags":"8589934592", "content": "HIGH_GLOBAL_RATE_LIMIT"},
  {"flags":"17179869184", "content":  "DELETED"},
  {"flags":"8388608", "content": "APPLICATION_COMMAND_BADGE"}
]


class flagss {

  static find(flagscode){
    if(!flagscode) return new Error("PUBLIC_FLAGS not provided")
    let findFlag = flagsArray.find(x => x.flags === flagscode)
    return findFlag.content
  }
  
}
module.exports = flagss;