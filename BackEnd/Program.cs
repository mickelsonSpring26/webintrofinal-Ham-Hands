using CardDeck.Hubs;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSignalR();
builder.Services.AddCors(o => o.AddDefaultPolicy(p => p.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()));
var app = builder.Build();
app.UseCors();
app.MapHub<ChatHub>("/PlayGame");

app.MapGet("/", () => "Hello World!");

app.MapGet("/homepage", () => {
    return "Hello World";
});

List<Card> Deck = [new Card(0, "Red", "./Images/1.png"), new Card(1, "Red", "./Images/2.png"), new Card(2, "Red", "./Images/3.png")
, new Card(3, "Red", "./Images/4.png"), new Card(4, "Red", "./Images/5.png"), new Card(5, "Red", "./Images/6.png"), new Card(6, "Red", "./Images/7.png")
, new Card(7, "Red", "./Images/8.png"), new Card(8, "Red", "./Images/9.png"), new Card(9, "Red", "./Images/10.png"), new Card(0, "Blue", "./Images/31.png")
, new Card(1, "Blue", "./Images/32.png"), new Card(2, "Blue", "./Images/33.png"), new Card(3, "Blue", "./Images/34.png"), new Card(4, "Blue", "./Images/35.png")
, new Card(5, "Blue", "./Images/36.png"), new Card(6, "Blue", "./Images/37.png"), new Card(7, "Blue", "./Images/38.png"), new Card(8, "Blue", "./Images/39.png")
, new Card(9, "Blue", "./Images/40.png"), new Card(0, "Yellow", "./Images/11.png"), new Card(1, "Yellow", "./Images/12.png"), new Card(2, "Yellow", "./Images/13.png")
, new Card(3, "Yellow", "./Images/14.png"), new Card(4, "Yellow", "./Images/15.png"), new Card(5, "Yellow", "./Images/16.png"), new Card(6, "Yellow", "./Images/17.png")
, new Card(7, "Yellow", "./Images/18.png"), new Card(8, "Yellow", "./Images/19.png"), new Card(9, "Yellow", "./Images/20.png"), new Card(0, "Green", "./Images/21.png")
, new Card(1, "Green", "./Images/22.png"), new Card(2, "Green", "./Images/23.png"), new Card(3, "Green", "./Images/24.png"), new Card(4, "Green", "./Images/25.png")
, new Card(5, "Green", "./Images/26.png"), new Card(6, "Green", "./Images/27.png"), new Card(7, "Green", "./Images/28.png"), new Card(8, "Green", "./Images/29.png")
, new Card(9, "Green", "./Images/30.png")];

app.MapGet("/NewDeck", () =>
{
    List<Card> newDeck = Deck;
    return newDeck;
});

app.Run();

public record Card(int number, string color, string image);