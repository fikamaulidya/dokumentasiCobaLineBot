export function createFlex(routes, altText) {
  const contents = routes.map(({ origin, destination }) => {
    const card = createCard(origin, destination);
    return card;
  });

  return {
    "type": "flex",
    "altText": altText,
    "contents": {
      "type": "carousel",
      "contents": contents
    }
  }
}

export function createReply(routes) {
  const contents = routes.map(({ origin, destination }) => {
    const message = createText(origin, destination);
    return message;
  });
}

function createText(origin, destination) {
  return {
    "type": "message",
    "text": contents + `${origin}-${destination}\n\n silahkan hahahha`
  }
}

function createCard(origin, destination) {
  return {
    "type": "bubble",
    "hero": {
      "type": "image",
      "size": "full",
      "aspectRatio": "20:13",
      "aspectMode": "cover",
      "url": "https://www.iconspng.com/images/travel-car/travel-car.jpg"
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "spacing": "sm",
      "contents": [
        {
          "type": "text",
          "text": `${origin} - ${destination}`,
          "wrap": true,
          "weight": "bold",
          "size": "lg"
        },
      ]
    },
    "footer": {
      "type": "box",
      "layout": "vertical",
      "spacing": "sm",
      "contents": [
        {
          "type": "button",
          "style": "primary",
          "action": {
            "type": "message",
            "label": "Pilih",
            "text": `/${origin}-${destination}`
          }
        }
      ]
    }
  }
}