const { GObject, Gtk, Gio } = imports.gi;

var PlanoApplication = GObject.registerClass({
    GTypeName: 'PlanoApplication',
    Template: 'resource:///com/github/diegoivanme/plano/window.ui',
}, class PlanoApplication extends Gtk.Application {
    _init() {
        super._init ({
        	application_id: 'com.github.diegoivanme.plano',
        	flags: Gio.ApplicationFlags.FLAGS_NONE,
        });
    }
});
