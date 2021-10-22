const socialMediasLink = {
  github: 'Th-Fernandes',
  youtube: 'JakelinyGracielly',
  instagram: 'thiagofernades77/',
  facebook: 'ThiagoFernadesC',
  twitter: 'jato'
}

function changeSocialMediasLink() {

  for(let li of socialLinks.children) {
    const social = li.classList[1]
    li.children[0].href = `https://${social}.com/${socialMediasLink[social]}`
  }
}