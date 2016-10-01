using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(VisualWEBsites.Startup))]
namespace VisualWEBsites
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
