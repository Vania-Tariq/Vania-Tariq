# 😂 Random Joke Generator

A fun, interactive joke generator that fetches random jokes from an external API and displays them in a beautiful, responsive interface.

## 🎯 Features

- **Random Joke Generator**: Fetch unlimited random jokes with one click
- **Copy to Clipboard**: Easily share jokes with the copy button
- **Beautiful UI**: Gradient design with smooth animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Error Handling**: Graceful error messages if something goes wrong
- **Loading States**: Visual feedback while fetching jokes
- **Auto-load**: A joke loads automatically when the page opens

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Gradients, animations, and responsive design
- **JavaScript (ES6)** - Async/await for API calls
- **API Ninjas Jokes API** - External joke API (free tier, no authentication required)

## 📦 Installation & Usage

1. Clone or download the files
2. Open `index.html` in your web browser
3. Click "Get a Joke" to fetch a new joke
4. Click "📋 Copy" to copy the joke to your clipboard

**No server or build tools required!** Just open and use.

## 📝 API Information

This project uses the **API Ninjas Jokes API**:
- **Endpoint**: `https://api.api-ninjas.com/v1/jokes?limit=1`
- **Authentication**: Free tier (no key required for jokes)
- **Rate Limit**: 50,000 requests per month on free tier

## 🎨 Customization

You can customize the look and feel by editing `style.css`:
- Change the gradient colors in `body` background
- Modify button styles in `.btn-primary` and `.btn-secondary`
- Adjust card styling in `.joke-card`

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with optimal spacing
- **Tablet**: Adjusted padding and font sizes
- **Mobile**: Touch-friendly buttons and responsive text

## 🐛 Error Handling

The app includes robust error handling for:
- Network failures
- API timeouts
- Invalid responses
- Missing data

## 📄 License

Free to use and modify for personal or educational projects.

---

**Enjoy the laughs! 😄**
