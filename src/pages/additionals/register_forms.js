const forms = [
    (<form action='#' method='POST'>
        <div className="form-group mb-2">
            <label htmlFor="firstname">Nom: </label>
            <input type="text" name="firstname" id="firstname" className="form-control" placeholder='Entrez votre nom' required />
        </div>
        <div className="form-group mb-2">
            <label htmlFor="lastname">Nom: </label>
            <input type="text" name="lastname" id="lastname" className="form-control" placeholder='Entrez votre prénom' required />
        </div>
        <div className="form-group text-center">
            <button type="submit" className="text-white outline-0 border-0 rounded auth">Envoyer</button>    
        </div>
    </form>),
    (<form action='#' method='POST'>
        <div className="form-group mb-2">
            <label htmlFor="email">Adresse email: </label>
            <input type="email" name="email" id="email" className="form-control" placeholder='exemple@gmail.com' required />
        </div>
        <div className="form-group mb-2">
            <label htmlFor="confirm_email">Confirmez l'adresse email: </label>
            <input type="text" name="confirm_email" id="confirm_email" className="form-control" placeholder='exemple@gmail.com' required />
        </div>
        <div className="form-group text-center">
            <button type="submit" className="text-white outline-0 border-0 rounded auth">Envoyer</button>    
        </div>
    </form>),
    (<form action='#' method='POST'>
        <div className="form-group mb-2">
            <label htmlFor="code">Entrez le code à six chiffres qui vous a été envoyé par mail: </label>
            <input type="number" name="code" id="code" className="form-control" placeholder='XXXXXX' required />
        </div>
        <div className="form-group text-center">
            <button type="submit" className="text-white outline-0 border-0 rounded auth">Envoyer</button>    
        </div>
    </form>),
    (<form action='#' method='POST'>
        <div className="form-group mb-2">
            <label htmlFor="phone">Numéro de téléphone: </label>
            <input type="tel" name="phone" id="phone" className="form-control" placeholder='+226XXXXXXXX' required />
        </div>
        <div className="form-group mb-2">
            <label htmlFor="phone">Confirmation du numéro de téléphone: </label>
            <input type="tel" name="confirm_phone" id="confirm_phone" className="form-control" placeholder='+226XXXXXXXX' required />
        </div>
        <div className="form-group text-center">
            <button type="submit" className="text-white outline-0 border-0 rounded auth">Envoyer</button>    
        </div>
    </form>),
    (<form action='#' method='POST'>
        <div className="form-group mb-2">
            <label htmlFor="password">Mot de passe: </label>
            <input type="password" name="password" id="password" className="form-control" placeholder='Entrez votre mot de passe' required />
        </div>
        <div className="form-group mb-2">
            <label htmlFor="phone">Confirmation du mot de passe: </label>
            <input type="confirm_password" name="confirm_password" id="confirm_password" className="form-control" placeholder='Rentrez le mot de passe' required />
        </div>
        <div className="form-group text-center">
            <button type="submit" className="text-white outline-0 border-0 rounded auth">Envoyer</button>    
        </div>
    </form>),
    
]

export default forms