var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(o => o.AddDefaultPolicy(p => p.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()));
var app = builder.Build();
app.UseCors();

app.MapGet("/", () => "Hello World!");

app.MapGet("/homepage", () => {
    return "Hello World";
});

app.Run();
