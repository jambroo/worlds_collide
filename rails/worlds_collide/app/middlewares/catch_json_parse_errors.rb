class CatchJsonParseErrors
  def initialize(app)
    @app = app
  end

  def call(env)
    begin
      @app.call(env)
    rescue ActionDispatch::Http::Parameters::ParseError => error
      if env['HTTP_ACCEPT'] =~ /application\/json/ ||
          env['CONTENT_TYPE'] =~ /application\/json/

          return [
              400, { "Content-Type" => "application/json" },
              [ { status: 400, error: error }.to_json ]
            ]
      end
    end
  end
end
