using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace mvc.Models
{
    public class MusicModel
    {
        public string Music { get; set; }
 
        public MusicModel()
        {
            Music = GetHelloWorldAsync().Result;
        }

        public HttpClient CreateHelloWorldClient()
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri("https://localhost:5001/Music");
            return client;
        }

        public async Task<String> GetHelloWorldAsync()
        {
            using (var client = CreateHelloWorldClient())
            {
                HttpResponseMessage response;
                response = client.GetAsync(client.BaseAddress).Result;

                if (response.IsSuccessStatusCode)
                {
                    var music = await response.Content.ReadAsStringAsync();
                    return music;
                }
                else
                {
                    return "??";
                }
            }
        }
    }
}
