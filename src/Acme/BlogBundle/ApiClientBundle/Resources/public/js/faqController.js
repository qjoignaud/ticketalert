/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via Restangular
 * - exposes the model to the template and provides event handlers
 *
 * root_path & assets_path variables are set inside index.html.twig globally
 *
 * @type {angular.Module}
 */



app.controller("faqCtrl", function($scope){
	'use strict';

	$scope.items = [
		{ 
			id : 'One',
			question : 'Je n\'ai accès à aucun projet. Quelle en est la raison? ',
			answer : ' Chaque collaborateur peut accéder aux projets auxquels il est rattaché. Dans le cas où aucun projet n\'apparaît, cela veut probablement dire que vous n\'appartenez à aucun projet.' 
		},
		{ 
			id : 'Two',
			question : ' J\'ai effectué un paramétrage mais je ne reçois aucune notification. Comment régler mon problème? ',
			answer : ' Si vous avez choisi la notification sms, il faut renseigner un numéro de téléphone et le confirmer. Le paramétrage effectué doit ensuite correspondre au ticket nouvellement créé ou modifié. Il faut distinguer 2 sections : <ul><li  class=\"dropdown\"> - <b>la 1ère section</b> correspond aux critères d\'envoi d\'une notification suite à un nouveau ticket : chaque nouveau ticket est analysé de telle sorte à vérifier si un paramétrage concorde avec les caractéristiques du ticket. Si tel est le cas, la notification adéquate vous avertit de la présence d\'un nouveau ticket.</li><li> - <b>la 2ème section</b> correspond aux critères d\'envoi d\'une notification suite à un ticket modifié : vous avez la possibilité de suivre les tickets respectant les critères du paramétrage et ainsi choisir selon quels types de champs vous voulez être averti.</li></ul>' 
		},
		{ 
			id : 'Three',
			question : 'Je souhaite recevoir mes notifications email sur une adresse email personnelle. Comment puis-je faire?',
			answer : '  Par défaut, vos notifications email sont envoyés sur votre adresse \"prenom.nom@modisfrance.fr\". Si vous souhaitez les recevoir sur une adresse personnelle, vous devez remplir le champ \"Adresse email secondaire\" avec l\'adresse souhaitée puis la valider via l\'email de confirmation.' 
		},
		{ 
			id : 'Four',
			question : ' J\'ai perdu l\'email/sms de confirmation pour valider mon adresse email secondaire/numéro de tél. Comment en avoir un nouveau? ',
			answer : 'Lorsqu\'on vous saisissez votre adresse email secondaire ou votre numéro de téléphone, un lien/code de confirmation vous est envoyé. Ce lien/code est valide dans un délai de 24 heures après réception de l\'email ou du sms. Dans le cas où vous avez perdu ce code, il vous est possible d\'en générer un nouveau en cliquant sur l\'icône jaune à droite du champ.' 
		},
		{ 
			id : 'Five',
			question : 'Je ne vois pas les paramétrages des autres membres du projet. Comment puis-je y accéder? ',
			answer : '  L\'affichage des paramétrages d\'un projet varie suivant le niveau d\'accès de l\'utilisateur :<ul><li><b> - invité, rapporteur, testeur, développeur : </b> accède uniquement à ses paramétrages.</li><li><b> - gestionnaire : </b> accède aux paramétrages de son équipe et a les droits de modifications sur chaque paramétrage excepté les invités et les rapporteurs.</li><li><b> - administrateur : </b> accède à tous les paramétrages du projet et a les droits de suppression sur chaque paramétrage.</li></ul>' 
		},

		{
			id : 'Six',
			question : 'J\'ai le statut de gestionnaire ou d\'administrateur mais je ne vois pas les paramétrages des autres membres du projet. Comment puis-je les consulter?',
			answer : '  Par défaut, un filtre est activé et affiche uniquement les paramétrages de l\'utilisateur connecté. Si vous avez le niveau d\'accès suffisant pour consulter les paramétrages des membres de votre équipe, un icône de filtre apparaît en haut à droite de la section \"Consultation de vos paramétrages\". Le clic sur cet icône affichera les paramétrages filtrés s\'il y en a.'
		}

	];


});
	  